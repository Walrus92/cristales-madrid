export default function PricingCard({ plan, primaryColor }: any) {
    return (
        <div className="bg-white shadow-sm border rounded-xl p-8 flex flex-col justify-between h-full">
            <div>
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                    {plan.name}
                </h3>

                <div className="text-4xl font-bold text-center mb-6 text-gray-800">
                    {plan.price}
                </div>

                <ul className="text-gray-600 flex flex-col gap-2 mb-6">
                    {plan.features.map((f: string, idx: number) => (
                        <li key={idx}>• {f}</li>
                    ))}
                </ul>
            </div>

            <a
                href="#contacto"
                className="px-4 py-3 text-center rounded-lg text-white font-semibold"
                style={{ backgroundColor: primaryColor }}
            >
                {plan.cta}
            </a>
        </div>
    );
}
