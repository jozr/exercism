defmodule Acronym do
  def abbreviate(string) do
    list = Regex.scan(~r/[A-Z]+[a-z]*|[a-z]+/, string)
    |> List.flatten

    Enum.into(list, "",
      fn(word) ->
        String.capitalize(word)
        |> String.first
      end
    )
  end
end
