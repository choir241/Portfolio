import { cn } from "@/lib/utils";
import { Calendar} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Labels } from "../static/Labels";
interface ContactCardsProps {
  className?: string;
}

function CardComponent({
  title,
  content,
  button,
  calSize,
  link
}: {
  title: string;
  content: string;
  button: string;
  calSize: number;
  link: string;
}) {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="mb-4 text-portfolio-secondary">
          <Calendar size={calSize} />
        </div>
        <CardTitle className="text-portfolio-primary dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      </CardContent>
      <CardFooter>
        <a href = {link}>
        <Button className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white" aria-label={`${button} - ${title}`}>
          {button}
        </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

const ContactCards = ({ className }: ContactCardsProps) => {
  const contactCards = [
    Labels.contact.contactCardProject,
    Labels.contact.contactCardChat,
    Labels.contact.contactForStream,
  ];

  return (
    <article id="contact" className={cn("py-20 bg-white dark:bg-gray-900", className)}>
      <section className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary dark:text-white mb-4">
            {Labels.contact.heading2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to work together? Here's how you can reach out.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card) => {
            return (
              <CardComponent
                link={card.link}
                calSize={28}
                title={card.title}
                content={card.content}
                button={card.button}
              />
            );
          })}
        </section>
      </section>
    </article>
  );
};

export default ContactCards;
