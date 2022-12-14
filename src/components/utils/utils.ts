export const getArgs = (storybookArgs: any) => {
  const props = Object.keys(storybookArgs);
  const finalObj: any = {};
  const states = [];
  for (let i = 0; i < props.length; i++) {
    if (
      storybookArgs[props[i]].control &&
      (storybookArgs[props[i]].control?.type === 'boolean' ||
        storybookArgs[props[i]].control === 'boolean')
    ) {
      states.push(storybookArgs[props[i]]);
    } else {
      finalObj[props[i]] = storybookArgs[props[i]];
    }
    finalObj.states = states;
  }
  return finalObj;
};
