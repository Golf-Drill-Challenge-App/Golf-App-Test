const DrillExample = {
  did: "732489", //drill id
  drillType: "20 Shot Challenge",
  spec: "50ft - 150ft",
  shotType: "arg",
  description:
    "Adipisicing ad sint occaecat magna sint ad ea laboris voluptate fugiat labore. Aute labore anim occaecat laborum in magna dolore dolor cupidatat. Ea excepteur nulla magna eiusmod ad. Aute tempor ut cillum laborum ea commodo est ad non et duis tempor exercitation ad. Aute deserunt aliquip exercitation.",
  inputs: {
    distance: true,
    sideLanding: true,
    strokes: false,
    reps: 20,
  },
};

export function DrillGenerator() {
  let InputData = {};

  //find inputInstruction details

  let inputInstruction = {
    description: "Target Distance",
    distanceMeasure: "yd",
  };

  console.log(inputInstruction);

  //find inputDescriptors

  let inputDescriptors = [
    {
      icon: "arrow-up",
      prompt: "Carry Distance",
      distanceMeasure: "yd",
    },
    {
      icon: "arrow-left-right",
      prompt: "Side Landing",
      distanceMeasure: "ft",
    },
  ];

  console.log(inputDescriptors);

  //generate shotAttempts

  let shotAttempts = [];

  for (let index = 0; index < DrillExample.inputs.reps; index++) {
    let newAttempt = {
      shotNum: index + 1,
      target: Math.floor(Math.random() * (150 - 50 + 1)) + 50, //generates a random num 50-150
      distance: null, //user generated
      sideLanding: null, //user generated
    };

    shotAttempts[index] = newAttempt;
  }

  console.log(shotAttempts);

  //combine all into one

  InputData = {
    inputInstruction,
    inputDescriptors,
    shotAttempts,
  };

  console.log(InputData);

  return InputData;
}
