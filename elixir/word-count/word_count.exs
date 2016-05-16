defmodule Words do
  def count(sentence) do
    list = list_from_sentence(sentence)
    unique_list = Enum.uniq(list)

    map = Enum.into(unique_list, %{},
      fn(word) ->
        { word, count_in_list(list, word) }
      end
    )
    Map.delete(map, "")
  end

  def list_from_sentence(sentence) do
    sentence
    |> String.replace(~r/!|"|\#|\$|%|&|'|\(|\)|\*|\+|,|\.|\/|:|;|<|=|>|\?|@|\[|\\|]|\^|_|`|\{|\||}|~/, " ")
    |> String.downcase
    |> String.split(" ")
  end

  def count_in_list(list, word) do
    Enum.count(list,
      fn(item) ->
        item == word
      end
    )
  end
end
