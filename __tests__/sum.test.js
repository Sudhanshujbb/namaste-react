import { sum } from "../src/components/sum";

test("Sum should calc. sum of two no's", ()=>{
    const result = sum(3, 4);
    expect(result).toBe(7);
})