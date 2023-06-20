#install.packages('tidyverse')

library(tidyverse)

test <- read_csv('data/wta_matches_2000s.csv')


test |>
group_by(tourney_name) |>
summarize(most_common_hand = mode(winner_hand))
