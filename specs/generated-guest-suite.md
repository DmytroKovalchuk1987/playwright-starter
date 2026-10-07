# Generated guest suite (G1–G4)

> **Source gap:** `specs/guest-suite.md` is absent from this project. The scenarios below use the available checked-in sources where possible. Anything that cannot be confirmed from the requested source is explicitly marked **ASSUMPTION** for human review. G3 has no matching requirement source in the available project files.

## G1 — Guest opens Garage

- **Передумова:** QAuto is available at the configured base URL.
- **Тестові дані:** none.
- **Кроки:** open the application; click the guest login button.
- **Очікуваний результат:** URL contains `/panel/garage`; a visible `Garage` heading appears.
- **Вимога-джерело:** `specs/guest-garage.md`; baseline `tests/guest-garage.spec.ts`.
- **ASSUMPTION:** This is G1 in the absent `specs/guest-suite.md`; mapping G1 to the existing Garage scenario is inferred from the task context.

## G2 — Guest adds a car

- **Передумова:** user is in the guest profile and can access Garage.
- **Тестові дані:** Brand `Audi`; Model `TT`; Mileage `12000`.
- **Кроки:** log in as guest; open Add car; select Audi then TT; enter mileage 12000; save.
- **Очікуваний результат:** Garage URL is shown and the `Audi TT` entry is visible.
- **Вимога-джерело:** `specs/add-car.md`.
- **ASSUMPTION:** This is G2 in the absent `specs/guest-suite.md`; mapping G2 to the available Add car scenario is inferred from the requested test suite.

## G3 — Guest records a fuel expense

- **Передумова:** **ASSUMPTION** — guest profile is signed in and has a car available for selecting in the expense form. No G3-specific precondition was found in the checked-in specs.
- **Тестові дані:** **ASSUMPTION / TBD** — amount, date, mileage, liters, and car are not specified by any available source; do not choose values until this scenario is reviewed.
- **Кроки:** **ASSUMPTION / TBD** — presumed flow: open Fuel Expenses, start adding an expense, enter the required data, and save. Page, controls, and required fields need a source or UI confirmation.
- **Очікуваний результат:** **ASSUMPTION / TBD** — presumed outcome is that the newly saved expense is visible; exact observable fields/result are unspecified.
- **Вимога-джерело:** **відсутнє** — `specs/guest-suite.md` is missing, and no Fuel Expenses requirement was found in the available Markdown sources.

## G4 — Guest searches vehicle instructions

- **Передумова:** user has opened QAuto and signed in through Guest log in; Instructions is available in the left menu.
- **Тестові дані:** Brand `BMW`; Model `X5`.
- **Кроки:** log in as guest; open Instructions; select BMW as Brand, then X5 as Model; activate Search.
- **Очікуваний результат:** at least one instruction card is visible; each displayed card title refers to BMW X5; each card exposes a Download link or button. Do not download the PDF.
- **Вимога-джерело:** `requirements/instructions-search-requirement.md`.
- **ASSUMPTION:** This is G4 in the absent `specs/guest-suite.md`; mapping G4 to the available instruction-search requirement is inferred from the requested test suite.

## Review items

1. Restore/provide `specs/guest-suite.md` to confirm the G1–G4 mapping and source requirements.
2. Provide the G3 requirement and concrete data/observable result.
3. Confirm whether the available Add car and Instructions requirements are the intended G2 and G4 scenarios.
