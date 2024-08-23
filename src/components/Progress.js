function Progress({ index, numQuestions, points, maxPossiblePoints, asnwer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(asnwer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
