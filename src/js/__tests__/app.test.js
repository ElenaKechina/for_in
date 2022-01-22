import orderByProps from '../app';

describe('orderByProps function:', () => {
  test('should return array sort', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    let result = [
      { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
      { key: 'level', value: 2 }, // порядок взят из массива с ключами
      { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
      { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
      { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ];

    expect(orderByProps(obj, ['name', 'level'])).toEqual(result);
    result = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ];
    expect(orderByProps(obj, [])).toEqual(result);

    result = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
    ];

    expect(orderByProps(obj, ['name', 'level', 'health', 'attack', 'defence'])).toEqual(result);
  });
});
