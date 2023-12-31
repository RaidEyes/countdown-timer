function Second(props: { second: number }) {
  return (
    <div>
      <div className="card">
        <p className="sm:text-6xl text-[rgb(var(--primary-red))] relative before:absolute before:inset-0 before:h-3/6 before:bg-[rgb(var(--neutral-light-blue),0.3)]">
          {props.second}
        </p>
      </div>
      <h2 className="sm:scale-125 lg:pt-12 text-[0.5rem] tracking-[0.25rem] pt-4 text-white/40">
        SECONDS
      </h2>
    </div>
  );
}

export default Second;
