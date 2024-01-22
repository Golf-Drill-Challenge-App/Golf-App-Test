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

  //generate shotAttempts

  let shotAttempts = [];

  for (let index = 0; index < DrillExample.inputs.reps; index++) {
    let newAttempt = {
      shotNum: index + 1,
      target: [
        {
          description: "Target Distance",
          distanceMeasure: "yd",
          value: Math.floor(Math.random() * (150 - 50 + 1)) + 50, //generates a random num 50-150, //this will need to be randomly generated
        },
      ],
      inputs: [
        {
          id: "distance",
          icon: "arrow-up",
          prompt: "Carry Distance",
          distanceMeasure: "yd",
          value: null, //user generated
        },
        {
          id: "sideLanding",
          icon: "arrow-left-right",
          prompt: "Side Landing",
          distanceMeasure: "ft",
          value: null, //user generated
        },
      ],
    };

    shotAttempts[index] = newAttempt;
  }

  //LOG TESTING FOR THE WIN

  console.log(shotAttempts); //entire object

  console.log(shotAttempts[0].target[0]); //target array

  console.log(shotAttempts[0].target[0].value); //target.value

  console.log(shotAttempts[0].inputs); //inputs array

  return InputData;
}
