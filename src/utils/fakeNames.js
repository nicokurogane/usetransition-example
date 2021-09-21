import faker from "faker";

//** Genera 10,000 nombres para filtrado
export const fakeNames = Array.from(Array(10000), () => {
  return faker.name.findName();
});
