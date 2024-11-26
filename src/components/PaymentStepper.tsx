import { Check, Clock } from 'lucide-react';

export function PaymentStepper() {
  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto mb-8">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <Check className="w-5 h-5" />
        </div>
        <span className="text-sm mt-2">Checkout</span>
      </div>
      <div className="flex-1 h-px bg-border mx-4" />
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <Clock className="w-5 h-5" />
        </div>
        <span className="text-sm mt-2">Split Payment</span>
      </div>
      <div className="flex-1 h-px bg-border mx-4" />
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border-2 border-muted flex items-center justify-center text-muted-foreground">
          <span className="text-sm font-medium">3</span>
        </div>
        <span className="text-sm mt-2">Payment Status</span>
      </div>
    </div>
  );
}