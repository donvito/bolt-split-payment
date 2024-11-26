import { CreditCard, Plus, Wallet, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function PaymentMethods() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Payments</h3>
        <div className="p-6 bg-card rounded-lg border shadow-sm">
          <RadioGroup defaultValue="card1" className="space-y-4">
            <div className="flex items-center justify-between space-x-4 p-4 rounded-lg border bg-background">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="card1" id="card1" />
                <Label htmlFor="card1" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>•••• •••• •••• 4242</span>
                </Label>
              </div>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
          </RadioGroup>
          <Button variant="outline" className="w-full mt-4">
            <Plus className="w-4 h-4 mr-2" />
            Add another card
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Other Payment Methods</h3>
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-[#0070BA] flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm">PayPal</span>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-[#3396CD] flex items-center justify-center">
              <Wallet className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm">Venmo</span>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-full bg-[#00D54B] flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm">Cash App</span>
          </Button>
        </div>
        <Button variant="outline" className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Add other digital payment
        </Button>
      </div>
    </div>
  );
}