#install.packages('tidyverse')

library(tidyverse)

matches_2000s <- read_csv("data/wta_matches_2000s.csv") |>
filter(!grepl("Fed Cup", tourney_name))

getmode <- function(v) {
    uniqv <- unique(v)
    uniqv[which.max(tabulate(match(v, uniqv)))]
}

matches_2000s |>
group_by(tourney_name) |>
summarize(most_common_hand = getmode(winner_hand)) |>
filter(most_common_hand == 'L') |>
print(n = 177)


wimbledon <- matches_2000s |>
filter(tourney_name == "Wimbledon")

wimbledon |>
mutate(winner_seed = as.numeric(winner_seed)) |>
ggplot(aes(x = winner_seed)) +
geom_histogram()