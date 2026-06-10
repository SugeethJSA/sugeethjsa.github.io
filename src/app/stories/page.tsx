import { getStories, getStoryTags } from "@/lib/stories";
import { StoriesIndexClient } from "./stories-index-client";

export default function StoriesIndex() {
  const stories = getStories();
  const allTags = getStoryTags();
  return <StoriesIndexClient stories={stories} allTags={allTags} />;
}
