import { useBuilderForm } from "./use-builder-form";

import { Button } from "~/components/ui/button";

export const BuilderForm = () => {
  const { form, isError } = useBuilderForm();

  return (
    <>
      <form
        className="flex flex-col gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="name"
          children={(field) => <field.TextField label="Factory Name" />}
        />

        <form.AppField
          name="items"
          mode="array"
          children={(field) => {
            return (
              <div className="flex flex-col gap-6">
                {field.state.value.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {/* <form.AppField
                      name={`items[${index}].key`}
                      children={(field) => (
                        <field.TextField label={`Key #${index + 1}`} />
                      )}
                    /> */}
                    <h2 className="tracking-wider text-sm">
                      <span className="uppercase">KEY</span>{" "}
                      <span className="font-semibold">"{item.key}"</span>
                    </h2>
                    <div className="flex gap-4">
                      <div className="flex-1/3">
                        <form.AppField
                          name={`items[${index}].params`}
                          children={(field) => (
                            <field.TextField label="Params" />
                          )}
                        />
                      </div>
                      <div className="flex-2/3">
                        <form.AppField
                          name={`items[${index}].paramsType`}
                          children={(field) => (
                            <field.TextField label="Params Type" />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* {!isError && (
                  <Button
                    className="uppercase tracking-wider"
                    type="button"
                    onClick={() =>
                      field.pushValue({ key: "", params: "", paramsType: "" })
                    }
                  >
                    ADD KEY
                  </Button>
                )} */}
              </div>
            );
          }}
        />

        <div className="mt-4">
          <form.AppForm>
            <form.SubmitButton isSubmitting={false} className="w-full">
              Save
            </form.SubmitButton>
          </form.AppForm>
        </div>
      </form>
    </>
  );
};
