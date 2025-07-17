let obj = {
    name: "Shiv",
    role: "Programmer",
    company: "Amazon"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key)
}