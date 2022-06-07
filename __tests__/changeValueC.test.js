const { changeValueC } = require('../src/controlChangeValue');

test("If function ok, return string", () => {
    var result = ""

    result = changeValueC(false, false)
    expect(typeof result).toBe("string")

    result = changeValueC(true, false)
    expect(typeof result).toBe("string")

    result = changeValueC(false, true)
    expect(typeof result).toBe("string")

    result = changeValueC(true, true)
    expect(typeof result).toBe("string")
    
});