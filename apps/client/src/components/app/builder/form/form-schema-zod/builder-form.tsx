import { useBuilderForm } from "./use-builder-form";

import { Button } from "~/components/ui/button";

export const BuilderForm = () => {
  const { form, isError } = useBuilderForm();

  return (
    <>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="name"
          children={(field) => <field.TextField label="Name" />}
        />

        <form.AppField
          name="type"
          children={(field) => <field.TextField label="Type" />}
        />

        <form.AppField
          name="min"
          children={(field) => <field.TextField label="Min (optional)" />}
        />

        <form.AppField
          name="min_message"
          children={(field) => (
            <field.TextField label="Min Message (optional)" />
          )}
        />

        <form.AppField
          name="max"
          children={(field) => <field.TextField label="Max (optional)" />}
        />

        <form.AppField
          name="max_message"
          children={(field) => (
            <field.TextField label="Max Message (optional)" />
          )}
        />

        <form.AppField
          name="description"
          children={(field) => <field.TextField label="Description" />}
        />

        {/* <div className="mt-4">
          <form.AppForm>
            <form.SubmitButton isSubmitting={false} className="w-full">
              Save
            </form.SubmitButton>
          </form.AppForm>
        </div> */}
      </form>
    </>
  );
};
