import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: string | null;
}

const QUESTIONS_BY_TIER: Record<string, {
  question: string;
  options: string[];
}> = {
  "Idea → Prototype": {
    question: "What do you have today?",
    options: [
      "A rough idea in my head",
      "Notes, sketches, or a brief",
      "Existing research or user interviews"
    ]
  },
  "AI Product Polish": {
    question: "What do you have today?",
    options: [
      "A live product with real users",
      "A working build but not yet launched",
      "A prototype or MVP"
    ]
  },
  "Pitch & Narrative": {
    question: "What do you have today?",
    options: [
      "Early idea, no product or materials yet",
      "Built product, but no deck or pitch materials",
      "A rough deck that needs a full rework",
      "A deck that exists but isn't landing",
      "Existing deck plus supporting materials (one-pager, messaging doc, etc.)"
    ]
  }
};

export default function ContactModal({ isOpen, onClose, selectedTier }: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    q1: [] as string[],
    q2: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        name: "",
        email: "",
        q1: [],
        q2: ""
      });
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, this would send to hello@upcraft.xyz
    console.log("Form submitted:", { tier: selectedTier, ...formData });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleQ1Change = (option: string) => {
    setFormData(prev => {
      if (prev.q1.includes(option)) {
        return { ...prev, q1: prev.q1.filter(item => item !== option) };
      } else {
        return { ...prev, q1: [...prev.q1, option] };
      }
    });
  };

  const currentQ1 = selectedTier && QUESTIONS_BY_TIER[selectedTier];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <DialogTitle className="text-2xl font-display font-bold">Got it.</DialogTitle>
              <p className="text-muted-foreground">
                We'll be in touch within 24 hours.
              </p>
              <Button onClick={onClose} className="mt-6">
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8 py-4"
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-display font-bold">
                  {selectedTier}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  Tell us a bit about your project to see if it's a fit.
                </p>
              </DialogHeader>

              {/* Q1: Multi-choice */}
              {currentQ1 && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    1. {currentQ1.question} <span className="text-xs font-normal text-muted-foreground ml-1">(Select all that apply)</span>
                  </Label>
                  <div className="space-y-3">
                    {currentQ1.options.map((option) => (
                      <div key={option} className="flex items-start space-x-3">
                        <Checkbox 
                          id={`q1-${option}`} 
                          checked={formData.q1.includes(option)}
                          onCheckedChange={() => handleQ1Change(option)}
                          className="mt-1"
                        />
                        <Label 
                          htmlFor={`q1-${option}`} 
                          className="text-sm font-normal cursor-pointer leading-snug"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Required Fields: Name & Email */}
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">Name <span className="text-destructive">*</span></Label>
                  <Input 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email <span className="text-destructive">*</span></Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              {/* Q2: Single-choice */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">
                  2. When do you need this?
                </Label>
                <RadioGroup 
                  value={formData.q2} 
                  onValueChange={(val) => setFormData({...formData, q2: val})}
                  className="space-y-3"
                >
                  {["ASAP", "Within a few weeks", "No rush, just exploring"].map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <RadioGroupItem value={option} id={`q2-${option}`} />
                      <Label htmlFor={`q2-${option}`} className="font-normal cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-bold rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
