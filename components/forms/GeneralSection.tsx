type Props = {
  register: any;
};

export default function GeneralSection({ register }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label>Entreprise</label>

        <input {...register("entreprise")} className="border p-2 w-full" />
      </div>

      <div>
        <label>Responsable</label>

        <input {...register("responsable")} className="border p-2 w-full" />
      </div>
    </div>
  );
}
