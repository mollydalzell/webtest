#install.packages('tidyverse')

library(tidyverse)

test <- read_csv('data/wta_matches_2000s.csv')

getmode <- function(v) {
    uniqv <- unique(v)
    uniqv[which.max(tabulate(match(v, uniqv)))]
}

test |>
group_by(tourney_name) |>
summarize(most_common_hand = getmode(winner_hand)) |>
filter(most_common_hand == 'L') |>
print(n = 177)
