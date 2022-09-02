import { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const cards = [
  'https://www.nycinsiderguide.com/wp-content/uploads/2019/04/new-york-city-street-map.jpg',
]

const from = (_i) => ({ rot: 180, scale: 2, y: -1300 });

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -20 + Math.random() * 20,
  delay: i * 250,
});

const trans = (rot, scale) =>
  `perspective(5000px) rotateX(0deg) rotateY(${rot}deg) rotateZ(${rot}deg) scale(${scale})`;

export function Portfolio() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2;
      if (!active && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
        const rot = mx / 7 + (isGone ? xDir * 10 * vx : 0);
        const scale = active ? 1.25 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    },
  );

  return (
    <>
      <section className='page'>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className='deck' key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
              }}
            />
          </animated.div>
        ))}
      </section>
    </>
  );
}
