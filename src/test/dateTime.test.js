import dateTimeComponents from '../components/dateTime.js';

const {
    currentTime,
    currentTimeUsingMoment,
} = dateTimeComponents;

const todayOnlyNum = currentTime(1);
test('currTime type 1',()=>{
    expect(currentTime(1).toBe(2));
});