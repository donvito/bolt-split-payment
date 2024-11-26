import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ContributorFormProps {
  index: number;
}

export function ContributorForm({ index }: ContributorFormProps) {
  return (
    <div className="space-y-4 p-6 bg-card rounded-lg border shadow-sm transition-all hover:shadow-md">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        Contributor {index}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`firstName-${index}`}>First name</Label>
          <Input
            id={`firstName-${index}`}
            placeholder="Enter first name"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`lastName-${index}`}>Last name</Label>
          <Input
            id={`lastName-${index}`}
            placeholder="Enter last name"
            className="w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`email-${index}`}>Email</Label>
        <Input
          id={`email-${index}`}
          type="email"
          placeholder="Enter email address"
          className="w-full"
        />
      </div>
    </div>
  );
}