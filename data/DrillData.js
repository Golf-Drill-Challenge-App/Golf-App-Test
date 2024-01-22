const InputDataDraft1 = {
  inputInstruction: {
    description: "Target Distance",
    distanceMeasure: "yd",
  },
  inputDescriptors: [
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
  ],
  shotAttempts: [
    {
      shotNum: 1,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 2,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 3,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 4,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 5,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 6,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 7,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 8,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 9,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 10,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 11,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 12,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 13,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 14,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 15,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 16,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 17,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 18,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 19,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
    {
      shotNum: 20,
      target: 150, //this will need to be randomly generated
      carry: 122, //user generated
      side: 12, //user generated
    },
  ],
};

//Below is an output of version 1 of the Drill Generation
const OuputDataDraft1 = {
  inputDescriptors: [
    { distanceMeasure: "yd", icon: "arrow-up", prompt: "Carry Distance" }, //hard coded
    { distanceMeasure: "ft", icon: "arrow-left-right", prompt: "Side Landing" }, //hard coded
  ],
  inputInstruction: { description: "Target Distance", distanceMeasure: "yd" }, //hard coded
  shotAttempts: [
    { distance: null, shotNum: 1, sideLanding: null, target: 144 },
    { distance: null, shotNum: 2, sideLanding: null, target: 135 },
    { distance: null, shotNum: 3, sideLanding: null, target: 140 },
    { distance: null, shotNum: 4, sideLanding: null, target: 145 },
    { distance: null, shotNum: 5, sideLanding: null, target: 64 },
    { distance: null, shotNum: 6, sideLanding: null, target: 87 },
    { distance: null, shotNum: 7, sideLanding: null, target: 106 },
    { distance: null, shotNum: 8, sideLanding: null, target: 145 },
    { distance: null, shotNum: 9, sideLanding: null, target: 68 },
    { distance: null, shotNum: 10, sideLanding: null, target: 80 },
    { distance: null, shotNum: 11, sideLanding: null, target: 76 },
    { distance: null, shotNum: 12, sideLanding: null, target: 93 },
    { distance: null, shotNum: 13, sideLanding: null, target: 101 },
    { distance: null, shotNum: 14, sideLanding: null, target: 109 },
    { distance: null, shotNum: 15, sideLanding: null, target: 108 },
    { distance: null, shotNum: 16, sideLanding: null, target: 120 },
    { distance: null, shotNum: 17, sideLanding: null, target: 126 },
    { distance: null, shotNum: 18, sideLanding: null, target: 132 },
    { distance: null, shotNum: 19, sideLanding: null, target: 148 },
    { distance: null, shotNum: 20, sideLanding: null, target: 84 },
  ],
};

const InputDataDraft2 = {
  attempts: [
    {
      shotNum: 1,
      target: [
        {
          description: "Target Distance",
          distanceMeasure: "yd",
          value: 150, //this will need to be randomly generated
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
    },
  ],
};

//Below is an output of version 2 of the Drill Generation
// [{"inputs": [[Object], [Object]], "shotNum": 1, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 2, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 3, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 4, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 5, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 6, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 7, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 8, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 9, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 10, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 11, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 12, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 13, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 14, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 15, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 16, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 17, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 18, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 19, "target": [[Object]]}, {"inputs": [[Object], [Object]], "shotNum": 20, "target": [[Object]]}]
