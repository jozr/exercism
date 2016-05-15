defmodule Teenager do
  def hey(string) do
    cond do
      String.ends_with?(string, "?") ->
        "Sure."
      String.strip(string) == "" ->
        "Fine. Be that way!"
      String.upcase(string) == string && String.match?(string, ~r/\p{L}+/) ->
        "Whoa, chill out!"
      true ->
        "Whatever."
    end
  end
end
