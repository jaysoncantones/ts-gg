import { useBuilderForm } from "./use-builder-form";

export const BuilderForm = () => {
  const { form } = useBuilderForm();

  return (
    <form
      className="flex flex-col gap-4 mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("simple");
        form.handleSubmit();
      }}
    >
      <h2 className="text-xs mb-2 uppercase tracking-wider">
        Query Key Factory
      </h2>
      <form.AppField
        name="queryKeysName"
        children={(field) => <field.TextField label="Factory Name" />}
      />

      <br />

      <h2 className="text-xs mb-2 uppercase tracking-wider">Query Function</h2>
      <form.AppField
        name="functionName"
        children={(field) => <field.TextField label="Function Name" />}
      />

      <form.AppField
        name="functionParams"
        children={(field) => <field.TextField label="Parameters" />}
      />

      <form.AppField
        name="queryKey"
        children={(field) => <field.TextField label="Query Keys" />}
      />

      <form.AppField
        name="queryFunctionName"
        children={(field) => <field.TextField label="Query Function Name" />}
      />

      <form.AppField
        name="queryFunctionAPI"
        children={(field) => <field.TextField label="Query Function API" />}
      />

      <div className="mt-4">
        <form.AppForm>
          <form.SubmitButton isSubmitting={false} className="w-full">
            Save
          </form.SubmitButton>
        </form.AppForm>
      </div>
    </form>
  );
};
