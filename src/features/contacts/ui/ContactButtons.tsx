import { CONTACT_BUTTON_TEXT, RESUME_BUTTON_TEXT } from "@/shared/lib/constants";
import { Button } from "@/shared/ui/Button";

export default function ContactButtons() {
  return (
    <div className="flex space-x-4">
      <Button variant="primary" as="a" href="/contacts">
        {CONTACT_BUTTON_TEXT}
      </Button>
      <Button variant="secondary" as="a" href="#">
        {RESUME_BUTTON_TEXT}
      </Button>
    </div>
  );
}