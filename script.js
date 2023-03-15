var Temperature = function Temperature(props) {
  console.log('props: ', props);
  return React.createElement(
    'h1',
    null,
    'The current temperature is ',
    props.degree,
    ' degree ',
    props.unit
  );
};

var element = React.createElement(Temperature, { degree: 25, unit: 'celsius' });

ReactDOM.render(element, document.getElementById('root'));