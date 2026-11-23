
import React from "react";

const menItems = [
  ["Shirt", "12", "60-70", "80-100", "110"],
  ["Pants", "12", "60-70", "80-100", "110"],
  ["T-Shirt", "12", "60-80", "80-100", "110"],
  ["Punjabi", "12", "60-80", "80-100", "110"],
  ["Pajama", "12", "60-80", "80-100", "110"],
  ["Coat / Blazer", "100", "-", "200-220", "-"],
  ["Jacket", "50", "150-200", "150-200", "-"],
  ["Sweater", "20", "100", "150", "-"],
  ["Tie", "12", "50", "60", "-"],
  ["Suit (2 Piece / 3 Piece)", "-", "50-100", "400-600", "-"],
];

const womenItems = [
  ["Saree (Cotton)", "60-80", "180-220", "250", "260"],
  ["Saree (Silk)", "80-100", "200", "220-280", "220"],
  ["Saree (Katan)", "100-130", "200", "220", "250"],
  ["Kameez", "12", "60", "70", "90"],
  ["Three-Piece", "30", "180", "210", "140"],
  ["Blouse", "12", "60", "70", "80"],
  ["Skirt", "20", "70", "80", "100"],
  ["Burqa", "30-50", "100-150", "170", "-"],
  ["Apron", "20", "70", "80-100", "-"],
  ["Lehenga Suit", "150", "-", "-", "350-500"],
  ["Shawl / Chador", "30-40", "200", "250", "-"],
];

const householdItems = [
  ["Curtain Fabric (Per Foot)", "12", "22", "30", "-"],
  ["Sofa Cover", "12", "60", "70-80", "-"],
  ["Bed Sheet", "40-50", "100-150", "250", "-"],
  ["Pillow Cover", "20", "70", "100", "-"],
  ["Blanket / Comforter", "-", "-", "300-450", "-"],
  ["Prayer Mat / Towel", "20", "50-60", "100", "-"],
  ["Quilt Cover", "-", "100", "150", "-"],
  ["Nakshi Kantha", "70", "180", "220", "-"],
  ["Carpet (Per Sq. Ft.)", "20", "40", "-", "-"],
];

// Reusable Pricing Table
const RateTable = ({ title, items, number }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">

      {/* Table Title */}
      <div className="flex items-center gap-3 bg-[#F4A548] px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#D88724]">
          {number}
        </span>

        <h3 className="text-lg font-bold text-gray-900 md:text-xl">
          {title}
        </h3>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-sm">

          <thead className="bg-[#FFF1DD] text-gray-800">
            <tr>
              <th className="px-3 py-4 text-center">No.</th>
              <th className="px-4 py-4 text-left">Particulars</th>
              <th className="px-3 py-4 text-center">Iron (BDT)</th>
              <th className="px-3 py-4 text-center">Laundry (BDT)</th>
              <th className="px-3 py-4 text-center">Dry Clean (BDT)</th>
              <th className="px-3 py-4 text-center">Hanger (BDT)</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 transition-colors even:bg-[#FFFAF3] hover:bg-[#FFF1DD]"
              >
                <td className="px-3 py-3 text-center text-gray-500">
                  {index + 1}
                </td>

                <td className="px-4 py-3 font-medium text-gray-800">
                  {item[0]}
                </td>

                {item.slice(1).map((price, i) => (
                  <td
                    key={i}
                    className="px-3 py-3 text-center font-medium text-gray-700"
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section
      id="Pricing"
      className="bg-[#FFF9F1] px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">

          <span className="mb-4 inline-block rounded-full bg-[#F4A548]/15 px-5 py-2 text-sm font-semibold text-[#C47A1C]">
            Affordable & Transparent
          </span>

          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Our <span className="text-[#F4A548]">Pricing</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Explore our laundry, ironing, dry cleaning and hanger service
            prices. Quality care at affordable rates.
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#F4A548]" />
        </div>

        {/* Pricing Tables */}
        <div className="space-y-10">

          <RateTable
            number="01"
            title="Men's Collection"
            items={menItems}
          />

          <RateTable
            number="02"
            title="Women's Collection"
            items={womenItems}
          />

          <RateTable
            number="03"
            title="Household Items"
            items={householdItems}
          />

        </div>

        {/* Pricing Note */}
        <div className="mt-8 rounded-xl border-l-4 border-[#F4A548] bg-[#FFF1DD] p-5">
          <p className="text-sm leading-6 text-gray-700">
            <strong className="text-gray-900">Note:</strong>{" "}
            All prices are in Bangladeshi Taka (BDT).
            Prices may vary depending on fabric type and design.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
