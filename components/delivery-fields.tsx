import { rememberDeliveryCountry, US_STATES, type DeliveryCountry, type DeliveryDetails } from "@/lib/delivery-destination";

const fieldClass =
  "mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500";

type DeliveryFieldsProps = {
  value: DeliveryDetails;
  onChange: (value: DeliveryDetails) => void;
  idPrefix?: string;
};

export function DeliveryFields({ value, onChange, idPrefix = "delivery" }: DeliveryFieldsProps) {
  const countryId = `${idPrefix}-country`;
  const cityId = `${idPrefix}-city`;
  const regionId = `${idPrefix}-region`;
  const postalId = `${idPrefix}-postal`;
  const notesId = `${idPrefix}-notes`;
  const isUs = value.deliveryCountry === "US";

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium text-gray-700">Delivery destination</legend>
      <p className="text-sm text-gray-600">
        {isUs
          ? "Orders are dispatched from a UK warehouse to the US delivery address. Shipping cost and timing are confirmed on the quotation."
          : "United Kingdom delivery uses a town or city and a postcode. Orders are dispatched from a UK warehouse."}
      </p>
      <div>
        <label htmlFor={countryId} className="block text-sm font-medium text-gray-700">
          Delivery country *
        </label>
        <select
          id={countryId}
          value={value.deliveryCountry}
          onChange={(event) => {
            const country: DeliveryCountry = event.target.value === "US" ? "US" : "GB";
            rememberDeliveryCountry(country);
            onChange(
              country === value.deliveryCountry
                ? value
                : { ...value, deliveryCountry: country, deliveryRegion: "", deliveryPostcode: "" },
            );
          }}
          className={fieldClass}
          required
        >
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={cityId} className="block text-sm font-medium text-gray-700">
            {isUs ? "Delivery city *" : "Delivery town or city *"}
          </label>
          <input
            id={cityId}
            type="text"
            value={value.deliveryCity}
            onChange={(event) => onChange({ ...value, deliveryCity: event.target.value })}
            autoComplete="address-level2"
            className={fieldClass}
            required
          />
        </div>
        {isUs ? (
          <div>
            <label htmlFor={regionId} className="block text-sm font-medium text-gray-700">
              State *
            </label>
            <select
              id={regionId}
              value={value.deliveryRegion}
              onChange={(event) => onChange({ ...value, deliveryRegion: event.target.value })}
              autoComplete="address-level1"
              className={fieldClass}
              required
            >
              <option value="">Select a state</option>
              {US_STATES.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div>
            <label htmlFor={postalId} className="block text-sm font-medium text-gray-700">
              Postcode *
            </label>
            <input
              id={postalId}
              type="text"
              value={value.deliveryPostcode}
              onChange={(event) => onChange({ ...value, deliveryPostcode: event.target.value })}
              autoComplete="postal-code"
              placeholder="LS12 3TZ"
              className={fieldClass}
              required
            />
          </div>
        )}
      </div>
      {isUs ? (
        <div>
          <label htmlFor={postalId} className="block text-sm font-medium text-gray-700">
            ZIP code *
          </label>
          <input
            id={postalId}
            type="text"
            inputMode="numeric"
            value={value.deliveryPostcode}
            onChange={(event) => onChange({ ...value, deliveryPostcode: event.target.value })}
            autoComplete="postal-code"
            placeholder="10001"
            className={fieldClass}
            required
          />
        </div>
      ) : null}
      <div>
        <label htmlFor={notesId} className="block text-sm font-medium text-gray-700">
          Extra destination instructions
        </label>
        <input
          id={notesId}
          type="text"
          value={value.deliveryNotes}
          onChange={(event) => onChange({ ...value, deliveryNotes: event.target.value })}
          maxLength={300}
          placeholder="Suite, dock or receiving note, if useful"
          className={fieldClass}
        />
      </div>
    </fieldset>
  );
}
