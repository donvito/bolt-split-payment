import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PaymentStepper } from '@/components/PaymentStepper';
import { ContributorForm } from '@/components/ContributorForm';
import { PaymentMethods } from '@/components/PaymentMethods';
import { PlusCircle, ArrowRight } from 'lucide-react';

export default function App() {
  const [contributors, setContributors] = useState([1, 2]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <PaymentStepper />
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Add Contributors</h2>
              <div className="space-y-2">
                <Label htmlFor="splitAmount">Split amount per person</Label>
                <Input
                  id="splitAmount"
                  placeholder="R100.00"
                  className="text-lg font-medium"
                />
              </div>
            </div>

            <div className="space-y-4">
              {contributors.map((_, index) => (
                <ContributorForm key={index} index={index + 1} />
              ))}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setContributors([...contributors, contributors.length + 1])}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add another contributor
              </Button>
            </div>

            <Button className="w-full">
              Generate Payment Links
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Payment Methods</h2>
            <PaymentMethods />
          </div>
        </div>
      </main>
    </div>
  );
}