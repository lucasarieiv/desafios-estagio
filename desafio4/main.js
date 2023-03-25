const distribuidoras = [
  { name: "SP", value: 67.83643 },
  { name: "RJ", value: 36.67866 },
  { name: "MG", value: 29.22988 },
  { name: "ES", value: 27.16548 },
  { name: "Outros", value: 19.84953 },
];


let valorTotal = 0

for (let distribuidora of distribuidoras) {
  valorTotal += distribuidora.value;
}

const percentual = distribuidoras.reduce((acc, current) => {
  acc[current.name] = (acc[current.name] / valorTotal) * 100;
  return acc;
}, {SP: 67.83643, RJ: 36.67866, MG: 29.22988, ES: 27.16548, Outros: 19.84953})


for (let distribuidora in percentual) {
  console.log(`${distribuidora }: ${percentual[distribuidora]}%`);
}


