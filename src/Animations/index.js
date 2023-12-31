 export const textPop = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 }
}

export const slideIn = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    transition: { duration: 0.2, ease: 'easeOut' }
};

export const slideTop = {
    initial : {opacity: 0, y : 30},
    animate : {opacity: 1, y : 0},
    exit:     {opacity: 0, y : 30}
  }