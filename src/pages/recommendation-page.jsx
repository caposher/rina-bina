export function RecommendationPage() {
  const allRec = require('../assets/recommendations/recommendation.json');
  return (
    <section className='recommendation-page'>
      {allRec.map((txt, idx) => {
        return (
          <div className='rec-container' key={idx}>
            <p>{txt.recommend}</p>
          </div>
        );
      })}
    </section>
  );
}
