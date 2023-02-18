function layout() {
  return {
    name: "Custom Layout",
    initialState: {
      ids: []
    },
    commands: {
    },
    getFrameAssignments: (windows, screenFrame, state) => {
      const sqrt = Math.sqrt(windows.length);
      const rows = Math.floor(sqrt);
      const cols = Math.ceil(sqrt);
      eturn windows.reduce(
        (frames, w, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          return {
            ...frames,
            [w.id]: {
              x: screenFrame.x + (screenFrame.width * col / cols),
              y: screenFrame.y + (screenFrame.height * row / rows),
              width: screenFrame.width / cols,
              height: screenFrame.height / rows
            }
          };
        },
        {}
      );
    }
  };
}
