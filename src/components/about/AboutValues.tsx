import {
  Accessibility,
  Code2,
  Layers,
  Zap,
} from "lucide-react";

import { Card } from "@/components/common/Card";
import Container from "@/components/layout/Container";
import type { AboutValue } from "@/types/about";

interface AboutValuesProps {
  values: AboutValue[];
}

const icons = {
  Layers,
  Zap,
  Accessibility,
  Code2,
};

export default function AboutValues({
  values,
}: Readonly<AboutValuesProps>) {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">
            Our Core Values
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon =
              icons[value.icon as keyof typeof icons];

            return (
              <Card
                key={value.id}
                className="p-6"
              >
                {Icon && (
                  <Icon className="mb-5 h-10 w-10 text-blue-600" />
                )}

                <h3 className="mb-3 text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}