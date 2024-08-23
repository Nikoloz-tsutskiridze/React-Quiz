function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((options) => (
          <button className="btn btn-option" key={options}>
            {options}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
