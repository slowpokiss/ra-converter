export default function Converter( value : string | undefined) {
  function hex2rgb(str: string | undefined): null | string {

    if (str === undefined || value?.length !== 7 || value[0] !== "#") {
      return null;
    }
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(str);

    if (!result) {
      return null;
    }
    return `rbg(${[
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16),
    ].join(", ")})`;
  }
  const result = hex2rgb(value);

  return result
}
