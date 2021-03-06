# Бинарный поиск

## Задача

Необходимо найти индекс записи с `item` в списке `items`

```ts
items = [9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 22, 30, 31, 33]; // Массив поиска
item = 30; // Искомый элемент
```

### Как искать?

#### Вариант 1 - самый наивный и неэффективный

Можно перебрать весь массив элементов и каждый раз проверять не равняется ли значение текущего элемента заданному. Но это крайне неэффективный метод, так как сложность алгоритма увеличивается с ростом `N` прямо-пропорционально.

Оценка производительности: **`O(N)`**.

#### Вариант 2 - алгоритм бинарного поиска

Вспомни как ты ищешь телефон компании в "желтых страницах" - ну в настоящих, бумажных желтых страницах.
Допустим ты хочешь найти компанию с названием "Цветы"?

1. Открываешь где-нибудь посередине (можем где угодно, от этого суть алгоритма не изменится)
2. Если на этой странице нашел компанию с названием "Цветы" - значит задача решена
3. Если окажется что ты открыл ПОСЛЕ буквы "Ц", значит можешь оторвать правую часть справочника и сжечь ее,
4. если открыл до буквы "Ц" то можешь сделать тоже самое с левой частью справочника.
5. С оставшейся частью повторяем пункты 1-4
   ... итак пока не закончатся страницы

так вот этот алгоритм и называется "Бинарный поиск", то есть за каждый шаг мы отбрасываем половину справочника.

Оценка производительности: **`O(log N)`** что конечно же в разы быстрее чем **`O(N)`**.

### Программный код реализующий алгоритм Бинарного поиска на `TypeScript`

```ts
export function binarySearch<T>(list: T[], item: T): number | null {
  let low: number = 0;
  let high: number = list.length - 1;
  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);
    let guess: T = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}
```

_Бинарный поиск работает только в том случае, если список отсортирован. Например, имена в телефонной книге хранятся в алфавитном порядке, и вы можете воспользоваться бинарным поиском._
