export const MacOsWindowContent = () => (
  <div className="flex flex-col gap-3.5">
    <pre className="whitespace-pre-wrap text-sm">
      <code className={'text-dracula-pink'}>{`const message = 'Olá, seja Bem-vindo!'`}</code>
    </pre>

    <div className="flex flex-col gap-1">
      <pre className="whitespace-pre-wrap text-sm">
        <code className={'text-dracula-pink'}>{`const coffee = new Coffee()`}</code>
      </pre>

      <pre className="whitespace-pre-wrap text-sm">
        <code
          className={'text-dracula-pink'}
        >{`while (coffee.isFull()) { \n${'  '}console.log('Happy Coding!')\n}`}</code>
      </pre>
    </div>
  </div>
);
