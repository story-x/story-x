const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\

## story-x  👋
<p align="center"><img src="https://github.com/story-x/story-x/blob/master/gif/RThN0hOS2GO4M.gif" /></p>

<p align="center"><img src="https://count.getloli.com/get/@story-x?theme=booru-yuyuyui" /></p>


## 今年汇总 ✨

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

⏰ Updated on ${new Date().toUTCString()}

---
<p align="center">
<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/story-x/story-x/dist/language/top-langs-dark.svg">
<source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/story-x/story-x/dist/language/top-langs-light.svg">
<img align="center" src="https://raw.githubusercontent.com/story-x/story-x/dist/language/top-langs-light.svg" alt="Top Languages" />
</picture>
<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/story-x/story-x/dist/snk/snake-dark.svg">
<source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/story-x/story-x/dist/snk/snake-light.svg">
<img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/story-x/story-x/dist/snk/snake-light.svg">
</picture>
</p>
\
`

console.log(readme)
