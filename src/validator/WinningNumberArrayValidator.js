import lottoNumber from '../constants/lottoNumber.js';
import errorMessage from '../constants/errorMessage.js';

class WinningNumberArrayValidator {
	validateNotNumber(winningNumberArray) {
		winningNumberArray.forEach((winningNumber) => {
			if (Number.isNaN(winningNumber)) {
				throw new Error(errorMessage.NOT_NUMBER);
			}
		});
	}

	validateArrayLength(winningNumberArray) {
		if (winningNumberArray.length !== 6) {
			throw new Error(errorMessage.NOT_SIX_COUNT);
		}
	}

	validateDuplicatedNumber(winningNumberArray) {
		if (winningNumberArray.length !== (new Set(winningNumberArray)).size) {
			throw new Error(errorMessage.DUPLICATED_NUMBER);
		}
	}

	validateNumberRange(winningNumberArray) {
		winningNumberArray.forEach(winningNumber => {
			if (winningNumber < lottoNumber.firstNumber || winningNumber > lottoNumber.lastNumber) {
				throw new Error(errorMessage.OUT_OF_RANGE);
			}
		});
	}

	static validate(winningNumberArray) {
		const winningNumberArrayValidator = new WinningNumberArrayValidator();
		winningNumberArrayValidator.validateNotNumber(winningNumberArray);
		winningNumberArrayValidator.validateArrayLength(winningNumberArray);
		winningNumberArrayValidator.validateDuplicatedNumber(winningNumberArray);
		winningNumberArrayValidator.validateNumberRange(winningNumberArray);
	}
}

export default WinningNumberArrayValidator;