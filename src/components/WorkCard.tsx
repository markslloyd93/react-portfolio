interface Props {
  cardTitle: string;
  cardDescription: string;
  cardTags: string[];
  websiteUrl: string;
  repository: string;
}
function WorkCard({
  cardTitle,
  cardDescription,
  cardTags,
  websiteUrl,
  repository,
}: Props) {
  return (
    <article className="border-brand-black border-2 p-5">
      <h3 className="text-2xl font-interBold pb-4 text-brand-black">
        {cardTitle}
      </h3>
      <p>{cardDescription}</p>
      <ul className="flex items-center gap-2.5 py-4">
        {cardTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="flex items-center gap-2.5">
        <a
          href={websiteUrl}
          target="_blank"
          className="font-interSemiBold text-brand-blue font-medium hover:underline focus:underline"
        >
          view website
        </a>
        <a
          href={repository}
          target="_blank"
          className="font-interSemiBold text-brand-blue font-medium hover:underline focus:underline"
        >
          view code
        </a>
      </div>
    </article>
  );
}

export default WorkCard;
