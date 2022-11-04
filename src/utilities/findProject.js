import { projects } from "../data/project"
import hyphenWord from "./hyphenateWords"

function findProject(str) {
  return projects.find(project => hyphenWord(project.title) === str)
}

export default findProject