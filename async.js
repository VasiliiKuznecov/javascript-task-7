'use strict';

exports.isStar = true;
exports.runParallel = runParallel;

/** Функция паралелльно запускает указанное число промисов
 * @param {Array} jobs – функции, которые возвращают промисы
 * @param {Number} parallelNum - число одновременно исполняющихся промисов
 * @param {Number} timeout - таймаут работы промиса
 *
 * @returns {Promise} promise - промис
 */
function runParallel(jobs) {
    return jobs[0]().then(data0 => {
        return jobs[1]().then(data1 => {
            return [data0, data1];
        });
    });
    // асинхронная магия
}
