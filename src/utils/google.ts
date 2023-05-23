const parts = props.address?.split(/\s+/) ?? [];
const formatedAddress = parts.join("+");

const Navigator = () => {
  const googleNavigation = `https://www.google.com/maps/search/?api=1&query=${formatedAddress},${props.number},${props.zipCode}`;
  window.open(googleNavigation, "_blank");
};
