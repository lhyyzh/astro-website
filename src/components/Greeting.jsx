import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
  //随机生成一个数组下标，并将该下标对应的数组元素内容返回
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}！感谢来访！</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        新的欢迎语
      </button>
    </div>
  );
}